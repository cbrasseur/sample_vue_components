<template>
  <div class="details">
    <h1>Details Views</h1>
    <DetailsViews/>
  </div>
</template>


<script>
// @ is an alias to /src

import DetailsViews from '@/components/DetailsItems'

export default {
  name: 'Details',
  components: {
    DetailsViews
  }
}
</script>
