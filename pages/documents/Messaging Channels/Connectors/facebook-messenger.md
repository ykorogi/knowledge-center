---
pagename: Facebook Messenger
categoryName: Messaging channels
subCategoryName: ''
indicator: messaging
subtitle: Tap into the millions of consumers connecting over Facebook using the power
  of LivePerson
level3: ''
permalink: messaging-channels-facebook-messenger.html
isTutorial: true
date: '2019-01-20T09:10:07.000+00:00'
isNew: true
redirect_from:
- facebook-connector.html

---
<iframe style="max-width: 750px;" src="https://player.vimeo.com/video/238902683" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

With over a billion messages being sent between people and businesses per month on Facebook Messenger, it’s time that businesses had a tool to manage these messages at scale. LiveEngage is now seamlessly integrated into Facebook Messenger, offering your brand the opportunity to tap into these consumers on their preferred messaging channel. Set up is easy and allows your agents to create ongoing connections with valuable customers right away.

## Why use Facebook Messenger to connect with your consumers?

* **Meet consumers where they are** — Consumers can continue using one popular app - Facebook Messenger - to connect to friends, families and now businesses.
* [**Rich Messaging**](messaging-channels-rich-messaging-rich-messaging-overview.html) **capabilities** — Rich Messaging capabilities like quick replies and consumer-to-agent audio messaging provide an enhanced messaging experience with more flexibility.
* **Enhanced indicators** — Read receipts and typing indicators tell the consumer when agent is actively answering. The agent also benefits from knowing when the consumer receives the message.
* **Simple bot integrations** — Brands can plug their own bots into Facebook Messenger. Bots can then offer service and sales assistance to customers, with seamless transition to a human agent when required.
* **In-depth reporting** — Track and report on all Facebook Messenger interactions with detailed performance metrics within LivePerson’s platform.

### These can be found in your Facebook page settings, under messaging settings:

* **Greeting:** sends a response the first time a consumer opens a conversation with your brand on messenger.
* **Response assistant:** allows you to send custom instant replies to anyone who messages your page.
* **Response time:** displays SLAs you can customize yourself e.g. _Typically replies within an hour_.
* **Offline response:** lets customers know you are offline but will respond soon e.g. _Hi, we’re away right now but we’ll get back to you shortly_.

{: .notice}
**Note:** The messages above will display in the agent workspace. Just like messages sent by agents, they have a character limit of 640.

## How conversations start

Brands and consumers can begin interacting over Facebook Messenger through multiple entry points, here are are some of the ways conversations can start:

* **Facebook Messenger app:** Consumers can begin conversations by searching for a brand directly within the Facebook Messenger app.
* **Facebook business page:** Brands can activate messaging capabilities on their Facebook business page, allowing consumers to click and start messaging.
* **Button on website:** Brands can embed a button on their website which invites consumers to message and launches Messenger.
* **Opting in:** Consumers can opt-in to receive purchase confirmation and updates via Messenger during the checkout process.
* **Offsite engagements:** Brands can embed a Message us button on ads, emails and other offsite locations.

## Setup

Facebook Messenger can be configured in LivePerson’s platform in minutes. Brands can quickly and easily add this channel to their operations, allowing them to successfully manage all their consumer interactions in one place.

### To onboard the Facebook connector:

1. On the Campaigns page, click on **Data Sources** in the Campaigns footnote.
2. From the Conversation Sources tab, click **Connect** in the Facebook Messenger box.

![](/img/facebook-messenger-1.png)

{:start="3"}

1. Enable the Activate Facebook Source toggle, then click **Next.**

![](/img/facebook-messenger-2.png)

{:start="4"}

1. Under configuration, click **Log in**. **Note:** In order to connect your Facebook page to LiveEngage, the administrator of the Facebook page needs to log in through LiveEngage
2. **If you are already logged in to Facebook:** A new smaller window pops-up asking if you would like to _"Continue as _________?"_ and you click on _"Continue as _______"_
3. **If you have Admin rights to a Facebook page:** it will ask you "What Pages do you want to use with LP on Messenger (VA1)?", you select the page(s) and click "Next". **If you are not Admin of a Facebook Page it will skip to the next step**
4. It will now ask you "What is LP on Messenger (VA1) allowed to do?” **If you were not presented with the previous step, options 2 and 3 will be grayed out and it will not allow you to complete the process (step 8).** Click on "Done"
5. It will tell you _"You’ve now linked LP on Messenger (VA1) to Facebook"_ and give you an _"OK"_ button that will close this smaller window.
6. A small pop-up within LiveEngage will appear asking you to Subscribe the Facebook pages that you previously allowed, You _"Subscribe"_ and click on **Done**.
7. Click on **Done** on the lower right corner.

![](/img/facebook-messenger-4.png)

## Adding an agent manager user to display third party messages

In order for messages sent directly from your Facebook Messenger inbox (via a Facebook page administrator or automated message) to appear in the agent workspace conversation thread, you will need to assign an agent manager user to whom the messages will be attributed.

To create a new Agent Manager user, specifically for this purpose:

1. On the Users page on LiveEngage, click **Add use**r.
2. Fill in the user details, ensuring that the following parameters are included:
   * Login name: connector
   * Email: [connector@lp.com](mailto:connector@lp.com)
   * Nickname: FB External User (or naming convention of your choice)
   * Name: FB External User (or naming convention of your choice) **Note:** Text entered in this field will display as the name in the conversation thread.
3. Password: A12345678
4. Assign to profile: Agent Manager
5. Click **Save**.

On the Facebook connector page, under **Add a Facebook external user**, simply select the Facebook External User profile you have just created and click **Done**.![](/img/facebook-messenger-3.png)
 **Note:** Do not select actual agent user that is taking conversations here. 

{: .notice}
**Note:** To route visitors from your campaign to a specific skill, please contact your LivePerson representative.

## Facebook Handover Protocol

Facebook Handover Protocol enables two or more apps to participate in a conversation by passing control of the conversation between them. This feature makes it possible for a Page to simultaneously use one Facebook app to build a 3rd party bot, outside of LiveEngage, for handling automated responses, and use another Facebook app (LiveEngage) for customer service with human agents.

* By default, all messages are sent to the Primary Receiver app
* When control of the conversation is passed to another, the Facebook Messenger Platform will send messages from the conversation to it instead.
* Only one app may control the conversation at a time.
* All apps that do not have control of the conversation will continue to listen to the conversation by subscribing to the standby webhook event.

{: .notice}
**Please note:** This feature requires enablement. Please contact your LivePerson representative for more information.
