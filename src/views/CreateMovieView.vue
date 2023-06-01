<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-6 mx-auto">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Введите название фильма</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Введите описание фильма</label>
                        <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Укажите обложку фильма</label>
                        <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Введите htqnbyu фильма</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-4">
                        <ButtonComponent 
                            buttonType="button"
                            buttonName="Отправить"
                            buttonState="true"
                        />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';

export default{
    components: {
        ButtonComponent
    }
}
</script>