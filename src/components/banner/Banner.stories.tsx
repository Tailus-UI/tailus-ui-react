import { Title, Text, Link} from "./../typography"
import type { StoryObj, Meta } from '@storybook/react';
import Banner, {type BannerProps} from "./Banner";

const Example = (args:BannerProps) => (
    <Banner.Root intent={args.intent}>
        <Banner.Content>

                <>
                {
                    args.intent == "danger" && (
                        <Banner.Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" fill-rule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zm9-3.167a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd" />
                            </svg>
                        </Banner.Icon>
                    )
                }
                {
                    args.intent == "info" && (
                        <Banner.Icon>
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m-4 48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m12 112a16 16 0 0 1-16-16v-40a8 8 0 0 1 0-16a16 16 0 0 1 16 16v40a8 8 0 0 1 0 16"/></svg>
                        </Banner.Icon>
                    )
                }    
                {
                    args.intent == "gray" && (
                        <Banner.Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 384 512"><path fill="currentColor" d="m252.879 446.324l-94.223 25.247c-6.713 1.798-13.676-2.222-15.475-8.935c-1.798-6.712 2.222-13.676 8.934-15.474l94.223-25.247c6.713-1.798 13.676 2.221 15.475 8.934c1.8 6.713-2.222 13.676-8.934 15.475m-43.626-289.558c-.844 11.486-7.341 17.96-17.428 17.796c-10.043-.162-17.352-7.045-17.111-17.526c.234-10.198 6.628-16.897 17.505-16.778c10.87.117 16.258 6.54 17.034 16.508m120.795-38.71C292.565 56.148 218.325 26.069 149.354 46.22C88.995 63.856 49.64 103.71 35.33 165.003c-14.164 60.666 3.466 112.846 48.085 156.545c10.464 10.249 20.085 22.663 25.984 35.91c5.914 13.278 7.81 17.43 22.215 13.944c20.006-4.841 39.744-10.787 59.746-15.646c10.254-2.491 14.15-8.216 14.082-18.553c-.274-41.72-.182-83.443-.03-125.164c.033-9.444-2.935-17.22-13.096-17.456c-10.286-.239-13.435 7.277-13.349 16.905c.238 27.049.072 54.1.07 81.15c-.001 43.515 0 43.515-42.787 49.767c-16.266-18.638-31.078-35.392-45.653-52.351c-52.31-60.866-42.744-150.842 22.543-197.443c46.904-33.481 97.29-35.344 147.525-7.075c46.644 26.25 72.02 80.33 65.294 132.645c-4.493 34.948-21.181 62.845-45.933 86.826c-14.938 14.473-28.55 30.055-33.45 50.982c-2.292 9.788-7.78 14.643-17.262 16.98c1.772-1.647-102.202 27.486-102.202 27.486c-6.578 1.762-10.517 8.586-8.754 15.163l.271 1.017c1.763 6.577 8.586 10.517 15.164 8.755c0 0 119.3-32.058 120.864-32.501c11.048-3.05 17.061-10.915 17.313-22.141c.376-16.759 7.658-29.803 19.508-40.938c6.344-5.962 12.66-11.977 18.63-18.306c49.276-52.263 57.408-131.562 19.94-193.449z"/></svg>
                        </Banner.Icon>
                    )
                }
                {
                    args.intent == "warning" && (
                        <Banner.Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272zM24 15c-.69 0-1.25.56-1.25 1.25v11.5a1.25 1.25 0 1 0 2.5 0v-11.5c0-.69-.56-1.25-1.25-1.25m0 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
                        </Banner.Icon>
                    )
                }
                {
                    args.intent == "success" && (
                        <Banner.Icon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"/></svg>
                        </Banner.Icon>
                    )
                }
                </>
            <div>
                <Title as="h3" size="base" weight="medium">Security vulnerability detected</Title>
                <Text className="mt-2">
                    A security vulnerability has been detected in the system. Please <Link className="text-[--title-text-color] dark:text-[--title-text-color]" intent={args.intent == "gray" ? "neutral" : args.intent} variant="underlined" href="#">update</Link> your password to secure your account.
                </Text>
                
            </div>
        </Banner.Content>
    </Banner.Root>
)

const meta: Meta<typeof Banner.Root> = {
  title: 'Banner',
  parameters: {
    docs: {
      description: {
        component: 'A customizable badge component for React applications.',
      },
    },
  },
    tags: ['autodocs'],
    argTypes: {
        intent: {
            name: 'Intent',
            control: "select",
            options: ['success', 'warning', 'danger', 'gray', 'info'],
            description: 'The intent of the banner.',
            defaultValue: 'gray',
        },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {
    name: "Banner Examples",
    args: {
        intent: "danger"
    },
    render: Example
};