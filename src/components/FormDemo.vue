<template>
    <div class="formdemo">
        <br/>
        <h3>1、表单联动</h3>
        <p>使用 setFieldsValue 来动态设置其他控件的值。</p>
        <a-form
                :form="form"
                @submit="handleSubmit"
        >
            <a-form-item
                    label="Note1"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 10 }"
            >
                <a-input
                        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
                />
            </a-form-item>
            <a-form-item
                    label="Gender"
                    :label-col="{ span: 5 }"
                    :wrapper-col="{ span: 12 }"
            >
                <a-select
                        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
                        placeholder="Select a option and change input text above"
                        @change="handleSelectChange"
                >
                    <a-select-option value="male">
                        male
                    </a-select-option>
                    <a-select-option value="female">
                        female
                    </a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item
                    :wrapper-col="{ span: 12, offset: 5 }"
            >
                <a-button
                        type="primary"
                        html-type="submit"
                >
                    Submit
                </a-button>
            </a-form-item>
        </a-form>

    </div>
</template>

<script>
    export default {
        name: "FormDemo",
        data () {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this),
            };
        },
        methods: {
            handleSubmit (e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleSelectChange (value) {
                console.log(value);
                this.form.setFieldsValue({
                    note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
                });
            },
        },
    }
</script>

<style scoped>
    .formdemo{
        margin:2rem 2rem
    }
</style>