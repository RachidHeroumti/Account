<template>
    <div class="d-f ai-c fw-w">
        <div class="lg-col-8 md-col-6 sm-col-12 status d-f ai-c sm-jc-c" :style="`color:${status.color}`">
            <span class="fw-600 px-1">{{ status.name }}</span>
        </div>
        <div class="lg-col-4 md-col-6 sm-col-12 sm-py-2 d-f jc-fe">
            <nuxt-link to="/messages">
                <si-button :px="10" background="var(--primary-color-op)" color="var(--primary-color)"
                    class="fw-600 mx-1">
                    <div class="d-f ai-c">
                        <span class="email-icon d-f ai-c" v-html="messageIcon"></span><span class="px-1">{{
                            "contact_seller" }}</span>
                    </div>
                </si-button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: { status: Object },
    components: { "si-button": () => import("@/components/account/SiButton") },
    data() {
        return {
            messageIcon:
                '<svg xmlns="http://www.w3.org/2000/svg" id="email" viewBox="0 0 515.8483 601.0869" width="20" height="20"><path fill="currentColor" d="M.993 446.588V160.612c0-.33.497-3.476 1.49-9.434l168.308 143.98L2.98 456.517c-1.324-4.634-1.986-7.944-1.986-9.93zm22.342-315.27c2.317-.992 5.13-1.488 8.44-1.488h453.29c2.98 0 5.958.496 8.937 1.49L325.197 275.796l-22.342 17.873-44.186 36.244-44.19-36.244-22.34-17.873zm.496 344.562l169.303-162.35 65.536 53.123 65.535-53.124 169.3 162.35c-2.647.993-5.46 1.49-8.44 1.49H31.776c-2.648 0-5.296-.497-7.944-1.49zm322.717-180.72L514.36 151.18c.992 2.98 1.488 6.123 1.488 9.433V446.59c0 2.977-.496 6.287-1.49 9.93z"/></svg>',
        };
    },
};
</script>

<style lang="scss" scoped>
.status {
    span {
        font-size: 15px;
    }

    &:before {
        content: "";
        display: block;
        padding: 2px;
        border: 2px solid currentColor;
        border-radius: 50px;
    }
}

.email-icon {
    color: #f6b706;
}
</style>
