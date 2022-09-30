import type { NextApiRequest, NextApiResponse } from 'next'

interface ResponseData {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log("Recieved", req)
  res.status(200).json({ status: 'OK' })
}
