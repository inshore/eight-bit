import type { ActionArgs, ActionFunction, V2_MetaFunction } from '@remix-run/node';
import { Form, isRouteErrorResponse, useActionData, useRouteError, useTransition } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getResponse } from '~/models/chat.server';

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const prompt = String(body.get('prompt'));
  const response = await getResponse(prompt);
  const errors = {};
  const values = { response };
  return json({ errors, values });
};

export function ErrorBoundary (): React.ReactElement {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section>
        <h1>Error</h1>
        <p> Status: {error.status}</p>
        <p>{error.data.message}</p>
      </section>
    );
  }

  let errorMessage = 'Unknown error has occured';
  // @todo global error handler
  if (error.isAxiosError) {
    errorMessage = error.response.data.error.message;
  }

  return (
    <section>
      <h1>Error</h1>
      <p> Status: An error has occurred</p>
      <p> {errorMessage}</p>
    </section>
  );
}

export const meta: V2_MetaFunction = () => [{ title: '8Bit' }];

export default function Prompt (): React.ReactElement {
  const actionData = useActionData<typeof action>();
  const transition = useTransition();

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
              <div className="mx-auto mt-10 max-w-l sm:flex sm:max-w-l sm:justify-center">
                <Form method="post">
                     <fieldset disabled={transition.state === "submitting"}>
                      <p>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          <input
                            className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="prompt"
                            type="text"
                          />
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          {transition.state === "submitting"
                            ? "Asking..."
                            : "Ask"}
                        </button>
                        </label>
                      </p>
                    </fieldset>
                </Form>
              </div>
               <section className="bg-white shadow appearance-none border border-grey-500 h-24 min-h-full rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                { actionData?.values.response }
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
