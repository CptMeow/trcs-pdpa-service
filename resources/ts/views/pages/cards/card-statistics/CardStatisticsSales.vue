<template>
  <VCard>
    <VCardText>
      <h6 class="text-base font-weight-regular">
        Sales
      </h6>
      <h5 class="text-h5 mb-2">
        482k
      </h5>
      <VChip
        label
        color="info"
      >
        +34%
      </VChip>
      <p class="text-sm mb-0 mt-3">
        Sales Target
      </p>
      <div class="d-flex align-center gap-2">
        <div class="flex-grow-1">
          <VProgressLinear
            height="8"
            rounded
            rounded-bar
            color="info"
            model-value="78"
          />
        </div>
        <span class="text-sm">78%</span>
      </div>
    </VCardText>
  </VCard>
</template>
