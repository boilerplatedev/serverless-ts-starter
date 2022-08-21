import { Handler } from 'aws-lambda'

// eslint-disable-next-line @typescript-eslint/require-await
export const handler: Handler = async () => {
  return { statusCode: 200, body: 'Hello World' }
}
