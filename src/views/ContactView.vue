<template>
    <div id="center">
        <div id="contact">
            <form class="frontColor">
                <div>
                    <label for="form_nom">Nom</label>
                    <input type="text" id="form_nom" name="nom" placeholder="Votre nom" v-model="state.firstName">
                </div>
                <div>
                    <label for="form_prenom">Prénom</label>
                    <input type="text" id="form_prenom" name="prenom" placeholder="Votre prénom" v-model="state.lastName">
                </div>
                <div>
                    <label for="form_email">Email</label>
                    <input type="email" id="form_email" name="email" placeholder="Votre email" v-model="state.email">
                </div>
                <div>
                    <label for="form_message">Message</label>
                    <textarea id="form_message" name="message" placeholder="Votre message" v-model="state.message"></textarea>
                </div>
                <div>
                    <button type="submit" id="sub" @click="sendForm">Envoyer</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import {emailApiKey, templateId, serviceId, emailURL} from "@/helpers/constants"
import { reactive, ref } from "vue";


const state = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
})


async function sendForm() {
    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: emailApiKey,
        template_params: {
            first_name: state.firstName,
            last_name: state.lastName,
            user_email: state.email,
            message: state.message
        }
    }

    const request = await fetch(emailURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    if(request.status === 200) {
        alert('Votre message a bien été envoyé !')
    } else {
        alert('Une erreur est survenue, veuillez réessayer plus tard.')
    }
}

</script>

<style scoped>
#center {
    width: 100%;
    height: 100vh;
    margin-left: 40px;
}

#contact {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10%;
    margin: auto;
}

form {
    border-radius: 5px;
    padding: 20px;
    width: 80%;
}

label {
    color: black;
    display: block;
    margin-bottom: 5px;
    margin-top: 10px;
    text-align: left;
}

input {
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
    padding: 10px 15px;
    width: 100%;
}

textarea {
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
    font-size: 16px;
    padding: 10px 15px;
    width: 100%;
    height: 200px;
    font-family: "Montserrat", sans-serif;
}

#sub {
    background-color: #0f172a;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 15px;
    margin-top: 5px;
    width: 100px;
}
</style>