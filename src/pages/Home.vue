<template>
  <div class="container">
    <Header />
    <Content />
  </div>
</template>

<script>
    import Header from '@/components/Header'
    import Content from '@/components/Content'

    export default {
      name: 'Home',
      components: {
        Header,
        Content
      }
    }
</script>
