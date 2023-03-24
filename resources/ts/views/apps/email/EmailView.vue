<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import type { Email } from '@/@fake-db/types'
import type { MoveEmailToAction } from '@/views/apps/email/useEmail'
import { useEmail } from '@/views/apps/email/useEmail'
import { useEmailStore } from '@/views/apps/email/useEmailStore'
import { formatDate } from '@core/utils/formatters'

interface Props {
  email: Email | null
  emailMeta: {
    hasPreviousEmail: boolean
    hasNextEmail: boolean
  }
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'refresh'): void
  (e: 'navigated', direction: 'previous' | 'next'): void
  (e: 'close'): void
  (e: 'trash'): void
  (e: 'unread'): void
  (e: 'star'): void
  (e: 'unstar'): void
}>()

const store = useEmailStore()

const { labels, resolveLabelColor, emailMoveToFolderActions, shallShowMoveToActionFor, moveSelectedEmailTo } = useEmail()

const handleMoveMailsTo = (action: MoveEmailToAction) => {
  moveSelectedEmailTo(action, [(props.email as Email).id])
  emit('refresh')
  emit('close')
}

const updateMailLabel = (label: Email['labels'][number]) => {
  store.updateEmailLabels([(props.email as Email).id], label)

  emit('refresh')
}
</script>

<template>
  <!-- ℹ️ calc(100% - 256px) => 265px is left sidebar width -->
  <VNavigationDrawer
    temporary
    :model-value="!!props.email"
    location="right"
    :scrim="false"
    floating
    class="email-view"
  >
    <template v-if="props.email">
      <!-- 👉 header -->

      <div class="email-view-header d-flex align-center px-5 py-3">
        <IconBtn
          class="me-3 flip-in-rtl text-medium-emphasis"
          size="32"
          @click="$emit('close')"
        >
          <VIcon
            size="32"
            icon="bx-chevron-left"
          />
        </IconBtn>

        <div class="d-flex align-center flex-wrap flex-grow-1 overflow-hidden gap-4">
          <h2 class="text-body-1 font-weight-medium text-high-emphasis text-truncate">
            {{ props.email.subject }}
          </h2>

          <div class="d-flex flex-wrap gap-4">
            <VChip
              v-for="label in props.email.labels"
              :key="label"
              :color="resolveLabelColor(label)"
              density="comfortable"
              class="px-2 text-capitalize flex-shrink-0"
              label
            >
              {{ label }}
            </VChip>
          </div>
        </div>

        <div class="d-flex align-center">
          <IconBtn
            variant="plain"
            :disabled="!props.emailMeta.hasPreviousEmail"
            class="flip-in-rtl"
            size="32"
            @click="$emit('navigated', 'previous')"
          >
            <VIcon icon="bx-chevron-left" />
          </IconBtn>
          <IconBtn
            variant="plain"
            class="flip-in-rtl"
            :disabled="!props.emailMeta.hasNextEmail"
            size="32"
            @click="$emit('navigated', 'next')"
          >
            <VIcon icon="bx-chevron-right" />
          </IconBtn>
        </div>
      </div>

      <VDivider />

      <!-- 👉 Action bar -->
      <div class="email-view-action-bar d-flex align-center text-medium-emphasis px-5">
        <!-- Trash -->
        <IconBtn
          v-show="!props.email.isDeleted"
          @click="$emit('trash'); $emit('close')"
        >
          <VIcon icon="bx-trash-alt" />
        </IconBtn>

        <!-- Read/Unread -->
        <IconBtn @click.stop="$emit('unread'); $emit('close')">
          <VIcon icon="bx-envelope" />
        </IconBtn>

        <!-- Move to folder -->
        <IconBtn>
          <VIcon icon="bx-folder" />

          <VMenu activator="parent">
            <VList density="compact">
              <template
                v-for="moveTo in emailMoveToFolderActions"
                :key="moveTo.title"
              >
                <VListItem
                  :class="shallShowMoveToActionFor(moveTo.action) ? 'd-flex' : 'd-none'"
                  class="align-center"
                  href="#"
                  @click="handleMoveMailsTo(moveTo.action)"
                >
                  <template #prepend>
                    <VIcon
                      :icon="moveTo.icon"
                      class="me-2"
                      size="20"
                    />
                  </template>
                  <VListItemTitle class="text-capitalize">
                    {{ moveTo.action }}
                  </VListItemTitle>
                </VListItem>
              </template>
            </VList>
          </VMenu>
        </IconBtn>

        <!-- Update labels -->
        <IconBtn>
          <VIcon icon="bx-label" />

          <VMenu activator="parent">
            <VList density="compact">
              <VListItem
                v-for="label in labels"
                :key="label.title"
                href="#"
                @click.stop="updateMailLabel(label.title)"
              >
                <template #prepend>
                  <VBadge
                    inline
                    :color="resolveLabelColor(label.title)"
                    dot
                  />
                </template>
                <VListItemTitle class="ms-2 text-capitalize">
                  {{ label.title }}
                </VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </IconBtn>

        <VSpacer />

        <!-- Star/Unstar -->
        <IconBtn
          :color="props.email.isStarred ? 'warning' : 'default'"
          @click="props.email?.isStarred ? $emit('unstar') : $emit('star'); $emit('refresh')"
        >
          <VIcon icon="bx-star" />
        </IconBtn>

        <!-- Dots vertical -->
        <MoreBtn />
      </div>

      <VDivider />

      <!-- 👉 Mail Content -->
      <PerfectScrollbar
        tag="div"
        class="mail-content-container flex-grow-1"
        :options="{ wheelPropagation: false }"
      >
        <VCard class="ma-5">
          <VCardText class="mail-header">
            <div class="d-flex align-start align-sm-center">
              <VAvatar
                class="me-3"
                size="38"
              >
                <VImg
                  :src="props.email.from.avatar"
                  :alt="props.email.from.name"
                />
              </VAvatar>

              <div class="d-flex flex-wrap flex-grow-1 overflow-hidden">
                <div class="text-truncate">
                  <span class="d-block text-high-emphasis font-weight-medium text-truncate">{{ props.email.from.name }}</span>
                  <span class="text-sm text-disabled">{{ props.email.from.email }}</span>
                </div>

                <VSpacer />

                <div class="d-flex align-center">
                  <span class="me-3 text-sm">{{ formatDate(props.email.time) }}</span>
                  <IconBtn
                    v-show="props.email.attachments.length"
                    size="20"
                    class="me-3"
                  >
                    <VIcon
                      icon="bx-paperclip"
                      size="20"
                    />
                  </IconBtn>
                </div>
              </div>
              <MoreBtn />
            </div>
          </VCardText>

          <VDivider />

          <VCardText>
            <!-- eslint-disable vue/no-v-html -->
            <div
              class="text-base"
              v-html="props.email.message"
            />
            <!-- eslint-enable -->
          </VCardText>

          <template v-if="props.email.attachments.length">
            <VDivider />

            <VCardText class="d-flex flex-column gap-y-4">
              <span>Attachments</span>
              <div
                v-for="attachment in props.email.attachments"
                :key="attachment.fileName"
                class="d-flex align-center"
              >
                <VImg
                  :src="attachment.thumbnail"
                  :alt="attachment.fileName"
                  aspect-ratio="1"
                  max-height="24"
                  max-width="24"
                  class="me-2"
                />
                <span>{{ attachment.fileName }}</span>
              </div>
            </VCardText>
          </template>
        </VCard>

        <VCard class="mx-5 mb-5">
          <VCardText class="font-weight-medium text-medium-emphasis">
            <div class="text-base">
              Click here to <span class="text-primary cursor-pointer">
                Reply
              </span> or <span class="text-primary cursor-pointer">
                Forward
              </span>
            </div>
          </VCardText>
        </VCard>
      </PerfectScrollbar>
    </template>
  </VNavigationDrawer>
</template>

<style lang="scss">
.email-view {
  inline-size: 100% !important;

  @media only screen and (min-width: 1280px) {
    inline-size: calc(100% - 256px) !important;
  }

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
  }
}

.email-view-action-bar {
  min-block-size: 56px;
}

.mail-content-container {
  background-color: rgb(var(--v-theme-on-surface), var(--v-hover-opacity));

  .mail-header {
    min-block-size: 84px;
  }

  .v-card {
    border: 1px solid rgba(var(--v-theme-on-surface), var(--v-border-opacity));
  }
}
</style>
