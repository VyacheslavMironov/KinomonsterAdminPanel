<template>
    <button 
        v-bind:type="buttonType"
        v-bind:class="buttonState ? 'btn btn-primary' : 'btn btn-danger'"
    >
        {{buttonName}}
    </button>
</template>

<script>
export default{
    props: {
        buttonType: String,
        buttonName: String,
        buttonState: Boolean
    }
}
</script>