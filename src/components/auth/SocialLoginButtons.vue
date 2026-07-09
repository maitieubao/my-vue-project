<template>
  <div class="flex items-center gap-4">
    <a
      :class="[
        'inline-flex items-center justify-center w-42.5 gap-3 px-4 py-2.5 cursor-pointer rounded-xl border border-[#E5E7EB] font-semibold text-[#111827] text-[14px] opacity-100',
        iconSize === 'big' ? 'h-[42px]' : 'h-15.5',
      ]"
    >
      <img :src="google" />
      {{ iconSize === 'big' ? 'Google' : 'Continue with Google' }}
    </a>

    <a
      :class="[
        'inline-flex items-center justify-center w-42.5 gap-3 px-4 py-2.5 cursor-pointer rounded-xl border border-[#E5E7EB] font-semibold text-[#111827] text-[14px] opacity-100',
        iconSize === 'big' ? 'h-[42px]' : 'h-15.5',
      ]"
    >
      <img :src="github" />
      {{ iconSize === 'big' ? 'GitHub' : 'Continue with GitHub' }}
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import googleBigIcon from '@/assets/GoogleBigIcon.svg'
import googleIcon from '@/assets/GoogleIcon.svg'
import githubBigIcon from '@/assets/GitHubBigIcon.svg'
import githubIcon from '@/assets/GitHubIcon.svg'

const props = defineProps({
  iconSize: { type: String, default: '' },
})

const google = computed(() => (props.iconSize === 'big' ? googleBigIcon : googleIcon))
const github = computed(() => (props.iconSize === 'big' ? githubBigIcon : githubIcon))
</script>
