# gupshup-whatsapp-notifications

## Table of Contents
* [Overview](#overview)
 *[Prerequities](#prerequities)
  * [Installation](#installation)

 ## Overview
With the help of this package you can send whatsApp messages from whatsApp business account to many users.

So follow the instructions and enjoy effortless push notifications on app.


## Prerequities
* Need to create gupshup account in [gupshup](gupshup.io).
* Need to create whatsApp business account for live and for sandbox account gupshup provide **sender mobile number**. 

## Installation

```bash
$ npm install --save gupshup-whatsapp-notifications
```
## Steps
* create account on gupshup.io.
* click on whatsapp tab.
* click on **Create App** option.

![Screenshot from 2023-03-17 15-59-25](https://user-images.githubusercontent.com/96247196/225879904-7c8a2bed-77f8-4492-a53d-e0e912d67ae3.png)

* click on **Access API** option.

![Screenshot from 2023-03-17 16-01-28](https://user-images.githubusercontent.com/96247196/225880313-258d07fb-5642-4d85-98c2-858c282c5865.png)

* Insert **App name** input field and click on **submit** button.

![Screenshot from 2023-03-17 16-02-59](https://user-images.githubusercontent.com/96247196/225880804-696a9f2a-d5b5-411f-a013-ea406025cd41.png)

* Now click on **WhatsApp** tab. Here you can see your created Apps listing.

![Screenshot from 2023-03-17 16-04-52](https://user-images.githubusercontent.com/96247196/225883142-3c581031-233b-4c79-ad17-948c39448d3d.png)

* Goto the user profile button and copy the **api key**.

![Screenshot from 2023-03-17 16-10-05](https://user-images.githubusercontent.com/96247196/225883584-2d7ac55b-6f5c-48c2-8613-e4b4e2722e19.png)


* Gupshup provide source number(917834811114) for sandbox account. When you go live then you need to create a whatsapp business account.


![Screenshot from 2023-03-17 15-26-48](https://user-images.githubusercontent.com/96247196/225886581-3657015c-0bf5-4187-8044-a87096090d96.png).

### Create User List For Sending Notifications

* Click on App Name and goto app detail page.

![Screenshot from 2023-03-17 16-45-10](https://user-images.githubusercontent.com/96247196/225889872-a968e6b1-6d6c-4b7f-981c-f4b6e370923f.png)

* Goto **Opt-ins** section and expand **Onboarding mechanisms**.
* Scroll down and scan the QR code for initiating whatsapp chat.

![Screenshot from 2023-03-17 16-51-50](https://user-images.githubusercontent.com/96247196/225890995-7f5f6e47-7b33-4a36-b168-391f45be17ec.png)

* When we collapse **Onboarding mechanisms** tab, we can see **Opt-in User List**. Now we can send message to these specific users only.

![Screenshot from 2023-03-17 16-53-10](https://user-images.githubusercontent.com/96247196/225893606-d64ea6c9-223c-4176-b970-df7b004505fa.png)

* Now come to our package.

After installing package and create an account on gupshup, you need to use `whatsappNotifications` method and need to pass in parameter.

`Eg:
```const **notificationInputData** = {
        channel: 'whatsapp',
        receiverNumbers: ["opt-in user1", "opt-in user2"],
        message: 'Hi Devs...',
        senderNumber: `91*******21`,
        appName: 'XYZ',
        gupshupApiKey: 'ycs******************s9kb'
    }
const notificationRes = await whatsappNotifications(notificationInputData);
```
`
| Fields | Value | Description |
| :---: | :--- | :--- |
| `channel` | whatsapp | Gupshup provide lots of channels like sms, slack, instagram, whatsapp and many more but we use whatsapp  |
| `receiverNumbers` | ["<opt-in user1>", "<opt-in user2>"] | Provides opt-ins users mobile number in array as a string. |
| `message` | 'Hi Devs ...' | Here you can pass message which you want to send our users. |
| `senderNumber` | 917834811114 for sandbox account | gupshup provide a sender mobile number for sandbox account when you go live with you **whatsappp App** then you can send message to our users with your own whatsapp business account |
| `appName` | string value | App name which you ctreates on **gupshup whatsapp** acount |
| `gupshupApiKey` | string value | It is your gupshup API key |


* The response of this method after successfully execution

`Eg:
{
    "status": "submitted",
    "messageId": "168a9031-cd0b-4ed5-97be-6c333d1b5e39"
}
`
## Note:
* For sandbox account gupshup sends message only one number. If we provide two numbers in an array, api gives success response with **messageId** and **status: submitted** but we don't get any message on whatsapp.


### Happy Learning...
