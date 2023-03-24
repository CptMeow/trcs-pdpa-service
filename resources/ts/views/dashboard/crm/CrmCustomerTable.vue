<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'

import avatar7 from '@images/avatars/avatar-1.png'
import avatar14 from '@images/avatars/avatar-14.png'
import avatar15 from '@images/avatars/avatar-15.png'
import avatar8 from '@images/avatars/avatar-8.png'
import avatar9 from '@images/avatars/avatar-9.png'
import masterCardDark from '@images/icons/payments/mastercard-dark.png'
import masterCardLight from '@images/icons/payments/mastercard-light.png'
import paypalDark from '@images/icons/payments/paypal-dark.png'
import paypalLight from '@images/icons/payments/paypal-light.png'
import visaDark from '@images/icons/payments/visa-dark.png'
import visaLight from '@images/icons/payments/visa-light.png'

const masterCard = useGenerateImageVariant(masterCardLight, masterCardDark)
const visa = useGenerateImageVariant(visaLight, visaDark)
const paypal = useGenerateImageVariant(paypalLight, paypalDark)

const customersData = [
  {
    amount: 459.65,
    status: 'paid',
    paidBy: 'mastercard',
    email: 'jok@puc.co.uk',
    customerName: 'Henry Barnes',
    avatarSrc: avatar7,
  },
  {
    amount: 93.81,
    paidBy: 'visa',
    status: 'pending',
    email: 'sami@lelo.com',
    customerName: 'Herman Holland',
    avatarSrc: avatar15,
  },
  {
    paidBy: 'visa',
    amount: 934.34,
    status: 'pending',
    email: 'initus@odemi.com',
    customerName: 'Hallie Warner',
    avatarSrc: avatar9,
  },
  {
    status: 'paid',
    amount: 794.97,
    paidBy: 'paypal',
    email: 'tum@upkesja.gov',
    customerName: 'John Davidson',
    avatarSrc: avatar14,
  },
  {
    amount: 19.49,
    status: 'paid',
    paidBy: 'mastercard',
    email: 'wipare@tin.com',
    customerName: 'Cora Schmidt',
  },
  {
    amount: 636.27,
    paidBy: 'paypal',
    status: 'failed',
    email: 'nur@kaomor.edu',
    customerName: 'Betty Ross',
    avatarSrc: avatar8,
  },
]

const resolveStatusColor = (value: string) => {
  if (value === 'paid')
    return 'success'

  else if (value === 'pending')
    return 'warning'

  else if (value === 'failed')
    return 'error'

  else
    return 'secondary'
}

const resolvePaidByLogo = (value: string) => {
  if (value === 'mastercard')
    return masterCard.value

  else if (value === 'visa')
    return visa.value

  else if (value === 'paypal')
    return paypal.value

  else
    return ''
}
</script>

<template>
  <VCard>
    <VTable class="text-no-wrap">
      <thead>
        <tr class="text-uppercase">
          <th>
            Customer
          </th>
          <th>
            Amount
          </th>
          <th>
            Status
          </th>
          <th>
            Paid By
          </th>
          <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="data in customersData"
          :key="data.customerName"
        >
          <td
            class="d-flex align-center gap-3 py-2"
            style="min-height: 60px;"
          >
            <VAvatar
              color="secondary"
              variant="tonal"
            >
              <VImg
                v-if="data.avatarSrc"
                :src="data.avatarSrc"
              />
              <VIcon
                v-else
                icon="bxs-user"
              />
            </VAvatar>

            <div>
              <h6 class="text-base font-weight-medium">
                {{ data.customerName }}
              </h6>
              <span>{{ data.email }}</span>
            </div>
          </td>

          <td>
            <span class="text-base">${{ data.amount }}</span>
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
            <VImg
              height="30"
              :src="resolvePaidByLogo(data.paidBy)"
            />
          </td>

          <td class="text-center">
            <MoreBtn />
          </td>
        </tr>
      </tbody>
    </VTable>
  </VCard>
</template>
