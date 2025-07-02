import { expect, describe, it, vi } from 'vitest'

if (typeof window !== 'undefined') {
    globalThis.localStorage = window.localStorage
}