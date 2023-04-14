<template>
    <section class="py-10 xl:py-20">
        <div class="container max-w-4xl">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">

                <article
                        class="relative"
                        v-for="(item, index) of items"
                        :key="index"
                >
                    <figure
                            class="absolute w-28 h-28 bg-slate-100 -z-10"
                            :class="item.position"
                    />
                    <h2 class="text-5xl font-bold text-blue-900">
                        {{ item.count }}
                    </h2>
                    <div class="text-slate-600 w-1/2 mt-5">
                        {{ item.text }}
                    </div>
                </article>

            </div>

        </div>
    </section>
</template>

<script lang="ts" setup>
interface AdvantageItemInterface {
    count: number;
    text: string;
    position: string;
}

const items: AdvantageItemInterface[] = [
    {
        count: 2048,
        text: 'Value',
        position: '-top-5 -left-5'
    },
    {
        count: 123,
        text: 'Value',
        position: '-top-5 left-5'
    }
];
</script>
