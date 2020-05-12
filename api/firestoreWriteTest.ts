const admin = require("firebase-admin")
import { NowRequest, NowResponse } from '@now/node'

export default async (req: NowRequest, res: NowResponse) => {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'xxxxxxx',
      clientEmail: "xxxxxx",
      privateKey: "xxxxxxx"
    }),
    databaseURL: "xxxxxxxx"
  })

  const db = admin.firestore()
  const newPurchaseId = await db.collection('firestoreWriteTest').add({
    email: 'foo@bar.com',
    purchased: true,
  })

  console.log('New purchase ID: ', newPurchaseId.id)
  res.status(200).send('OK')
}

