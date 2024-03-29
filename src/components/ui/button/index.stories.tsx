import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "."
import { Terminal } from "lucide-react"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered"
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"]
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
    children: "Primary"
  }
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline"
  }
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link"
  }
}

export const Small: Story = {
  args: {
    size: "sm",
    children: "Button"
  }
}

export const Medium: Story = {
  args: {
    size: "default",
    children: "Button"
  }
}

export const Large: Story = {
  args: {
    size: "lg",
    children: "Button"
  }
}

export const Icon: Story = {
  args: {
    size: "icon",
    children: <Terminal />
  }
}
