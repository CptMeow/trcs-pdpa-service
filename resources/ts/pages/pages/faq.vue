<script setup lang="ts">
import type { FaqCategory } from '@/@fake-db/types'
import axios from '@axios'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import sittingGirlWithLaptopDark from '@images/illustrations/sitting-girl-with-laptop-dark.png'
import sittingGirlWithLaptopLight from '@images/illustrations/sitting-girl-with-laptop-light.png'

const faqSearchQuery = ref('')

const faqs = ref<FaqCategory[]>([])

const fetchFaqs = () => {
  return axios.get('/pages/faqs', {
    params: {
      q: faqSearchQuery.value,
    },
  }).then(response => {
    faqs.value = response.data
  }).catch(error => {
    console.error(error)
  })
}

const activeTab = ref('Payment')
const activeQuestion = ref(0)

watch(activeTab, () => activeQuestion.value = 0)
watch(faqSearchQuery, fetchFaqs, { immediate: true })

const contactUs = [
  {
    icon: 'bx-phone-call',
    via: '+ (810) 2548 2568',
    tagLine: 'We are always happy to help!',
  },
  {
    icon: 'bx-envelope',
    via: 'hello@help.com',
    tagLine: 'Best way to get answer faster!',
  },
]

const sitingGirlWithLaptop = useGenerateImageVariant(sittingGirlWithLaptopLight, sittingGirlWithLaptopDark)
</script>

<template>
  <section>
    <!-- 👉 Search -->
    <AppSearchHeader
      v-model="faqSearchQuery"
      title="Hello, how can we help?"
      subtitle="or choose a category to quickly find the help you need"
      custom-class="mb-6"
    />

    <!-- 👉 Faq sections and questions -->
    <VRow>
      <VCol
        v-show="faqs.length"
        sd
        cols="12"
        sm="4"
        lg="3"
        class="position-relative"
      >
        <!-- 👉 Tabs -->
        <VTabs
          v-model="activeTab"
          direction="vertical"
          class="v-tabs-pill"
          grow
        >
          <VTab
            v-for="faq in faqs"
            :key="faq.faqTitle"
            :value="faq.faqTitle"
          >
            <VIcon
              :icon="faq.faqIcon"
              :size="20"
              start
            />
            {{ faq.faqTitle }}
          </VTab>
        </VTabs>

        <VImg
          :width="220"
          :src="sitingGirlWithLaptop"
          class="d-none d-sm-block mt-10 mx-auto"
        />
      </VCol>

      <VCol
        cols="12"
        sm="8"
        lg="9"
      >
        <!-- 👉 Windows -->
        <VWindow
          v-model="activeTab"
          class="faq-v-window disable-tab-transition"
        >
          <VWindowItem
            v-for="faq in faqs"
            :key="faq.faqTitle"
            :value="faq.faqTitle"
          >
            <div class="d-flex align-center mb-6">
              <VAvatar
                rounded
                color="primary"
                variant="tonal"
                class="me-4"
                size="42"
              >
                <VIcon
                  :size="24"
                  :icon="faq.faqIcon"
                />
              </VAvatar>

              <div>
                <h6 class="text-h6">
                  {{ faq.faqTitle }}
                </h6>
                <span class="text-sm">{{ faq.faqSubtitle }}</span>
              </div>
            </div>

            <VExpansionPanels
              v-model="activeQuestion"
              multiple
            >
              <VExpansionPanel
                v-for="item in faq.faqs"
                :key="item.question"
                :title="item.question"
                :text="item.answer"
              />
            </VExpansionPanels>
          </VWindowItem>
        </VWindow>
      </VCol>

      <VCol
        v-show="!faqs.length"
        cols="12"
        :class="!faqs.length ? 'd-flex justify-center align-center' : ''"
      >
        <VIcon
          icon="bx-help-circle"
          start
          size="20"
        />
        <span class="text-base font-weight-medium">
          No Results Found!!
        </span>
      </VCol>
    </VRow>

    <!-- 👉 You still have a question? -->
    <div class="text-center pt-12">
      <VChip
        label
        color="primary"
        density="compact"
      >
        QUESTION
      </VChip>

      <h6 class="text-h6 my-2">
        You still have a question?
      </h6>
      <p class="text-sm mb-6">
        If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
      </p>

      <!-- contacts -->
      <VRow class="mt-4">
        <VCol
          v-for="contact in contactUs"
          :key="contact.icon"
          sm="6"
          cols="12"
        >
          <VCard
            flat
            class="bg-var-theme-background"
          >
            <VCardText>
              <VAvatar
                size="42"
                color="primary"
                variant="tonal"
                class="me-3 contact-card-avatar"
              >
                <VIcon
                  size="24"
                  :icon="contact.icon"
                />
              </VAvatar>

              <h6 class="text-h6 my-3">
                {{ contact.via }}
              </h6>
              <span class="text-sm">{{ contact.tagLine }}</span>
            </VCardText>
          </VCard>
        </VCol>
      </VRow>
    </div>
  </section>
</template>

<style lang="scss">
.faq-v-window {
  .v-window__container {
    z-index: 0;
  }
}

.contact-card-avatar {
  border-radius: 8px;
}
</style>
