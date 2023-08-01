<script lang="ts">
import { defineComponent } from 'vue'
import { TextField, Card, Button } from '@/components/common'

export default defineComponent({
  name: 'Home',
  components: {
    TextField,
    Card,
    Button
  },
})
</script>
<template>
  <main class="main">
    <h1 class="heading1">Components</h1>
    <ul class="component-list">
      <li>
        <p><code>TextField</code></p>
        <TextField name="" value="" placeholder="Placeholder" />
      </li>
      <li>
        <p><code>Card</code></p>
        <Card>
          <p>Generic card content</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex, totam ducimus quam eligendi quasi
            laborum optio, tenetur, aperiam reprehenderit voluptates? A velit quia inventore amet excepturi pariatur
            praesentium. Quibusdam.
          </p>
        </Card>
      </li>
      <li>
        <p><code>Button</code></p>
        <Button>Button Label</Button>
      </li>
    </ul>
  </main>
</template>

