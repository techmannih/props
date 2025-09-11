import { expect, test } from "bun:test"
import {
  silkscreenTextProps,
  type SilkscreenTextProps,
} from "lib/components/silkscreen-text"

test("should parse silkscreen text with knockout properties", () => {
  const raw: SilkscreenTextProps = {
    text: "Label",
    isKnockout: true,
    knockoutPadding: { left: 1, top: 2, bottom: 3, right: 4 },
  }
  const parsed = silkscreenTextProps.parse(raw)
  expect(parsed.isKnockout).toBe(true)
  expect(parsed.knockoutPadding?.left).toBe(1)
  expect(parsed.knockoutPadding?.top).toBe(2)
  expect(parsed.knockoutPadding?.bottom).toBe(3)
  expect(parsed.knockoutPadding?.right).toBe(4)
})

test("should parse silkscreen text without knockout properties", () => {
  const raw: SilkscreenTextProps = { text: "No knockout" }
  const parsed = silkscreenTextProps.parse(raw)
  expect(parsed.isKnockout).toBeUndefined()
  expect(parsed.knockoutPadding).toBeUndefined()
})
