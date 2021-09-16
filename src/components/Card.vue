<script setup>

const props = defineProps({
    data: Object
});

function addressConvert(address) {
    return `г. ${address.city}, ул. ${address.street}, д. ${address.house}, кв. ${address.room}.`
}
function nameConvert(params) {
    return `${params.first_name} ${params.last_name} ${params.middle_name}`
}

</script>
<template>
    <div class="card">
        <div>
            <div class="card-title">{{ props.data.attributes.title }}</div>
            <div class="card-desc">
                <div class="card-field">Адрес: {{ addressConvert(props.data.attributes.address) }}</div>
                <div
                    class="card-field"
                >Площадь: {{ props.data.attributes.area }} {{ props.data.attributes.unit }}</div>
                <div
                    class="card-field"
                >Арендодатель: {{ nameConvert(props.data.relationships.attributes) }}</div>
            </div>
        </div>
        <div style="flex: 1;"></div>
        <div class="card-actions">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.card {
    background-color: #fff;
    box-shadow: 0 0 10px;
    border-radius: 15px;
    padding: 1.5em;
    display: flex;
    &-title {
        font-size: 32px;
        margin-bottom: 0.5em;
    }
    &-field {
        & + & {
            margin-top: 0.25em;
        }
    }
    &-actions {
        user-select: none;
    }
    & + & {
        margin-top: 0.75em;
    }
}

.icon-like {
    width: 24px;
    height: 24px;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAyMS41OTNjLTUuNjMtNS41MzktMTEtMTAuMjk3LTExLTE0LjQwMiAwLTMuNzkxIDMuMDY4LTUuMTkxIDUuMjgxLTUuMTkxIDEuMzEyIDAgNC4xNTEuNTAxIDUuNzE5IDQuNDU3IDEuNTktMy45NjggNC40NjQtNC40NDcgNS43MjYtNC40NDcgMi41NCAwIDUuMjc0IDEuNjIxIDUuMjc0IDUuMTgxIDAgNC4wNjktNS4xMzYgOC42MjUtMTEgMTQuNDAybTUuNzI2LTIwLjU4M2MtMi4yMDMgMC00LjQ0NiAxLjA0Mi01LjcyNiAzLjIzOC0xLjI4NS0yLjIwNi0zLjUyMi0zLjI0OC01LjcxOS0zLjI0OC0zLjE4MyAwLTYuMjgxIDIuMTg3LTYuMjgxIDYuMTkxIDAgNC42NjEgNS41NzEgOS40MjkgMTIgMTUuODA5IDYuNDMtNi4zOCAxMi0xMS4xNDggMTItMTUuODA5IDAtNC4wMTEtMy4wOTUtNi4xODEtNi4yNzQtNi4xODEiLz48L3N2Zz4=");
}
</style>