<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
                     style="background-size: cover; background-position: center top;" />

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-8 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">My account</h3>
                                </div>
                            </div>
                        </div>
                        <template>
                            <form @submit.prevent>
                                <h6 class="heading-small text-muted mb-4">Skin information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Title"
                                                        placeholder="Title"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="Youtube"
                                                        placeholder="Link Youtube Here"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <h6 class="heading-small text-muted mb-4">File information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="File Url"
                                                        placeholder="https://cdn.discordapp.com/attachments/757235709043015709/767087804676177960/resconf.t9DiXorQSUfm"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.username"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <base-input alternative=""
                                                        label="File location"
                                                        placeholder="Compulsory/android/gameassetbundles/config/resconf.t9DiXorQSUfmZNZZ523v2R~2BlEIc~3D"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.firstName"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Address -->
                                <h6 class="heading-small text-muted mb-4">Image information</h6>
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <base-input alternative=""
                                                        label="Cover"
                                                        placeholder="Image Cover"
                                                        input-classes="form-control-alternative"
                                                        v-model="model.address"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                          <div class="form-group">
                                            <base-input alternative=""
                                                        label="Previews">
                                              <textarea rows="4" class="form-control form-control-alternative" placeholder="Pisahkan dengan koma, contoh: gambar1, gambar2"></textarea>
                                            </base-input>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <!-- Description -->
                                <h6 class="heading-small text-muted mb-4">Description</h6>
                                <div class="pl-lg-4">
                                  <quill-editor
                                      ref="myQuillEditor"
                                      v-model="content"
                                      :options="editorOption"
                                      @blur="onEditorBlur($event)"
                                      @focus="onEditorFocus($event)"
                                      @ready="onEditorReady($event)"
                                  />
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    data() {
      return {
        content: `<p style="text-align: center;"><span style="font-size: 14px;">&rarr; This is a full-featured demo. Try it and see for yourself!&nbsp;</span><span style="font-size:14px;">&larr;</span></p>
<p style="text-align: center;">
\t<br><span style="font-size: 24px;"><span style="color: rgb(0, 0, 0); font-family: Arial, Helvetica, sans-serif;">Froala Editor is a lightweight WYSIWYG HTML Editor written in Javascript that enables rich text editing capabilities for your applications.</span></span><span class="fr-img-caption fr-dib fr-rounded fr-shadow" style="width: 203px;"><span class="fr-img-wrap"><img src="https://cdn.discordapp.com/attachments/733566015962611752/768329155635970098/0.png" alt="Editor photo"><span class="fr-inner">This is an image caption.</span></span></span></p>
`,
        editorOption: {
          // Some Quill options...
        },
        description: 'Edit Your Content Here!',
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
    methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      }
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
  };
</script>
<style>
.black-chip {
  background-color: #343a40 !important;
  color: #ffffff !important;
}

.black-chip.mt-close:before {
  background-color: white;
}

.black-chip.mt-close:after {
  background-color: white;
}
</style>
