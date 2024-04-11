<div align= "center">

![det1](https://github.com/kimonkekes/DetectifAI/assets/126149828/01c601f5-a2f4-46c4-b017-6abdcac619f1)
<br>

## 🔎 the AI face detector 🔎
</div>

**DetectifAI** is a full-stack **face detection app** utilizing **AI technology**. 

It is a responsive website that initially presents a Register/Login screen. After filling your info, you end up in the main page where you can **input an image URL**. The image is rendered on screen and -if it contains a face- the face within the image will be **marked by a blue rectangle**. There is also a **ranking system**, where the total amount of searches you have made.

<br>

## 🖥️ Tech stack

➡️ The ***front-end*** uses **React + Vite**.

➡️ The ***back-end API*** uses **Node.js + Express.js**. The server makes calls to an **AI API** provided by Clarifai, that supports the face recognition process. 

➡️ The **back-end AP** also communicates with a **PostgreSQL database** that holds user login and search amount info. The user passwords are stored in the database in a *bcrypt encrypted* format.

<br>


<div align="center">
🤖 A <b>live version</b> of the app has been deployed <a href="https://detectifai.onrender.com">here</a>.
</div>

<br>

![det2](https://github.com/kimonkekes/DetectifAI/assets/126149828/e2c867eb-03ea-438a-afa0-a97a16c131e1)

## 🚀 Quick start

1. First, you need to **clone this repository** and **install its dependencies**:

	```shell
	git clone https://github.com/kimonkekes/DetectifAI.git
	cd DetectifAI
	npm install
	```
	
2. Once installed, you can **run the frontend** with:

	```shell
	npm run dev
	```

3. Finally, **open** [http://localhost:5173](http://localhost:5173) with your browser.

<br><br>

>🚧	If you would like to run the back-end API locally, you will find the code in this repository: <br>
>
>[https://github.com/kimonkekes/DetectifAI-api](https://github.com/kimonkekes/DetectifAI-api)
>
>Please refer to the above link for relevant instructions. 🚧
