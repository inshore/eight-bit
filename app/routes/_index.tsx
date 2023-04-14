import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getResponse } from '~/models/chat.server';

export const meta: V2_MetaFunction = () => [{ title: '8Bit' }];

export const loader = async ({ request }: LoaderArgs) => {
  const date = new Date();
  return ({
    greeting: 'test' // await getResponse('Create a fun "hello world" message incorporating one significant historical event or a birth or a death that happened on the date of ' + date.toLocaleString('default', { day: '2-digit', month: 'long'}) + ' with a response maximum of 40 tokens do not use hash-tags.')
  });
};

export default function Index () {
  const { greeting } = useLoaderData();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
            <img
                className="h-full w-full object-cover"
                src="https://raw.githubusercontent.com/inshore/eight-bit/main/public/eight-bit.jpg"
                alt="8Bit band!"
              />
              <div className="absolute inset-0 bg-[color:rgba(0,0,0,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
                <span className="block uppercase text-red-500 drop-shadow-md">
                  8Bit Stack
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                { greeting }
              </p>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              </div>
              <a href="https://remix.run">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {[
              {
                src: 'https://user-images.githubusercontent.com/1500684/157991167-651c8fc5-2f72-4afa-94d8-2520ecbc5ebc.svg',
                alt: 'AWS',
                href: 'https://aws.com'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157990874-31f015c3-2af7-4669-9d61-519e5ecfdea6.svg',
                alt: 'Architect',
                href: 'https://arc.codes'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg',
                alt: 'ChatGPT',
                href: 'https://chat.openai.com'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157764454-48ac8c71-a2a9-4b5e-b19c-edef8b8953d6.svg',
                alt: 'Cypress',
                href: 'https://www.cypress.io'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157772990-3968ff7c-b551-4c55-a25c-046a32709a8e.svg',
                alt: 'ESLint',
                href: 'https://eslint.org'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157772934-ce0a943d-e9d0-40f8-97f3-f464c0811643.svg',
                alt: 'Prettier',
                href: 'https://prettier.io'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157764276-a516a239-e377-4a20-b44a-0ac7b65c8c14.svg',
                alt: 'Tailwind',
                href: 'https://tailwindcss.com'
              },
              {
                src: 'https://user-images.githubusercontent.com/1500684/157773063-20a0ed64-b9f8-4e0b-9d1e-0b65a3d4a6db.svg',
                alt: 'TypeScript',
                href: 'https://typescriptlang.org'
              }
            ].map((img) => (
              <a
                key={img.href}
                href={img.href}
                className="flex h-16 w-32 justify-center p-1 grayscale transition hover:grayscale-0 focus:grayscale-0"
              >
                <img alt={img.alt} src={img.src} className="object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
