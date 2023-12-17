<template>
    <div>
        <form>
            <div>
                <label for="form_nom">Nom</label>
                <input type="text" id="form_nom" name="nom" placeholder="Votre nom">
            </div>
            <div>
                <label for="form_prenom">Prénom</label>
                <input type="text" id="form_prenom" name="prenom" placeholder="Votre prénom">
            </div>
            <div>
                <label for="form_email">Email</label>
                <input type="email" id="form_email" name="email" placeholder="Votre email">
            </div>
            <div>
                <label for="form_message">Message</label>
                <textarea id="form_message" name="message" placeholder="Votre message"></textarea>
            </div>
            <div>
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>