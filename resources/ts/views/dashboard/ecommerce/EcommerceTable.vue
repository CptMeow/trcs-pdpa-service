<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'

import appleImacProDark from '@images/cards/apple-iMac-pro-dark.png'
import appleImacProLight from '@images/cards/apple-iMac-pro-light.png'
import appleIPhone11ProDark from '@images/cards/apple-iPhone-11-pro-dark.png'
import appleIPhone11ProLight from '@images/cards/apple-iPhone-11-pro-light.png'
import appleMagicMouseDark from '@images/cards/apple-magic-mouse-dark.png'
import appleMagicMouseLight from '@images/cards/apple-magic-mouse-light.png'
import logitechMxDark from '@images/cards/logitech-mx-dark.png'
import logitechMxLight from '@images/cards/logitech-mx-light.png'
import miLedTv4xDark from '@images/cards/mi-led-tv-4x-dark.png'
import miLedTv4xLight from '@images/cards/mi-led-tv-4x-light.png'
import onePlus7ProDark from '@images/cards/oneplus-7pro-dark.png'
import onePlus7ProLight from '@images/cards/oneplus-7pro-light.png'
import samsungNote10Dark from '@images/cards/samsung-note-10-dark.png'
import samsungNote10Light from '@images/cards/samsung-note-10-light.png'

const onePlus7 = useGenerateImageVariant(onePlus7ProLight, onePlus7ProDark)
const appleMagicMouse = useGenerateImageVariant(appleMagicMouseLight, appleMagicMouseDark)
const appleImacPro = useGenerateImageVariant(appleImacProLight, appleImacProDark)
const samsungNote10 = useGenerateImageVariant(samsungNote10Light, samsungNote10Dark)
const appleIPhone11Pro = useGenerateImageVariant(appleIPhone11ProLight, appleIPhone11ProDark)
const miLedTv4x = useGenerateImageVariant(miLedTv4xLight, miLedTv4xDark)
const logitechMx = useGenerateImageVariant(logitechMxLight, logitechMxDark)

const tableData = [
  {
    amountPaid: 120,
    brand: 'OnePlus',
    amountToPay: 499,
    status: 'confirmed',
    category: 'smartphone',
    product: 'OnePlus 7Pro',
    src: onePlus7,
  },
  {
    brand: 'Apple',
    amountPaid: 149,
    amountToPay: 149,
    category: 'mouse',
    status: 'completed',
    product: 'Magic Mouse',
    src: appleMagicMouse,
  },
  {
    amountPaid: 0,
    brand: 'Apple',
    amountToPay: 899,
    status: 'cancelled',
    product: 'iMac Pro',
    category: 'computer',
    src: appleImacPro,
  },
  {
    amountPaid: 169,
    brand: 'Samsung',
    amountToPay: 169,
    product: 'Note 10',
    status: 'completed',
    category: 'smartphone',
    src: samsungNote10,
  },
  {
    brand: 'Apple',
    amountPaid: 399,
    amountToPay: 399,
    status: 'completed',
    category: 'smartphone',
    product: 'iPhone 11 Pro',
    src: appleIPhone11Pro,
  },
  {
    brand: 'Xiaomi',
    amountPaid: 349,
    amountToPay: 2599,
    status: 'confirmed',
    category: 'smart-tv',
    product: 'Mi Led TV 4X',
    src: miLedTv4x,
  },
  {
    amountPaid: 89,
    amountToPay: 89,
    brand: 'Logitech',
    category: 'mouse',
    status: 'completed',
    product: 'Logitech MX',
    src: logitechMx,
  },
]

const resolveCategoryIcon = (value: string) => {
  if (value === 'smartphone')
    return { icon: 'bx-mobile-alt', color: 'primary' }

  else if (value === 'mouse')
    return { icon: 'bx-mouse', color: 'warning' }

  else if (value === 'computer')
    return { icon: 'bx-desktop', color: 'info' }

  else if (value === 'smart-tv')
    return { icon: 'bx-tv', color: 'error' }

  return 'bx-mobile-alt'
}

const checkPaidOrNot = (value: number, total: number) => {
  if (value === 0)
    return 'Unpaid'

  else if (value < total)
    return 'Partially Paid'

  return 'Paid'
}

const resolveStatusColor = (value: string) => {
  if (value === 'completed')
    return 'success'

  else if (value === 'cancelled')
    return 'error'

  return 'primary'
}
</script>

<template>
  <VCard>
    <VTable class="text-no-wrap">
      <thead>
        <tr>
          <th>PRODUCT</th>
          <th>CATEGORY</th>
          <th>PAYMENT</th>
          <th>ORDER STATUS</th>
          <th>ACTIONS</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="data in tableData"
          :key="data.brand"
        >
          <td style="height: 62px;">
            <div class="d-flex align-center gap-4">
              <div>
                <VImg
                  height="32"
                  width="32"
                  :src="data.src.value"
                />
              </div>

              <div>
                <h6 class="text-base font-weight-medium">
                  {{ data.product }}
                </h6>
                <span class="text-xs">{{ data.brand }}</span>
              </div>
            </div>
          </td>

          <td>
            <VAvatar
              variant="tonal"
              size="30"
              v-bind="resolveCategoryIcon(data.category)"
              class="text-xs me-2"
            />
            <span class="text-base text-capitalize">{{ data.category }}</span>
          </td>

          <td>
            <p class="text-base font-weight-semibold mb-0">
              <span class="text-primary">${{ data.amountPaid }}</span>
              <span>/</span>
              <span>${{ data.amountToPay }}</span>
            </p>
            <span class="text-xs">{{ checkPaidOrNot(data.amountPaid, data.amountToPay) }}</span>
          </td>

          <td>
            <VChip
              label
              density="compact"
              :color="resolveStatusColor(data.status)"
            >
              {{ data.status }}
            </VChip>
          </td>

          <td>
            <MoreBtn />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
