import { setProjectAnnotations } from "@storybook/nextjs"

import "@testing-library/jest-dom"

import * as previewAnnotations from "./.storybook/preview"

setProjectAnnotations([previewAnnotations])
