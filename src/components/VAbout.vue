<template>
  <VCommonTemplateVue :images="images">
    <template #heading>О компании</template>
    <template #text1
      >ООО «Ресурс» — сельскохозяйственное предприятие, занимается производством
      пищевых топленых животных жиров (ГОСТ 25292–82) и производством блоков
      замороженных субпродуктов /мясных миксов для мясоперерабатывающих и
      косметических производств Российской Федерации.
    </template>
    <template #text2>
      Компания образована в 2009 году и уже 13 лет работает на данном рынке.
    </template>
    <template #text3
      >Силами ООО «Ресурс» в период с июля 2011 по декабрь 2012 был возведен
      производственный комплекс и производственный цех по переработке мясосырья
      (жира сырца, жиросодержащего сырья и жировых тканей убойных животных) со
      встроенным складом-холодильником и административно-бытовыми
      помещениями.</template
    >
    <template #text4
      >Деятельность компании направлена на расширение отечественного
      производства основных видов продовольственного сырья. Производство
      отвечает современным требованиям качества и безопасности, что является
      одной из основных задач государственной политики в области здорового
      питания.</template
    >
    <template #text5
      >На предприятии большое внимание уделяется вопросам качества выпускаемой
      продукции посредством сотрудничества технологов предприятия и специалистов
      по качеству со стороны покупателей с аудиторами, специалистами НИИ и
      сертификационных органов. Основными потребителями жира топленого пищевого
      являются производители мыла, животных кормов, консервов и
      паштетов.</template
    >
  </VCommonTemplateVue>
</template>
<script>
import { defineComponent } from "vue";
import VCommonTemplateVue from "./VCommonTemplate.vue";

export default defineComponent({
  name: "VAbout",
  components: {
    VCommonTemplateVue,
  },
  setup() {
    const images = [
      {
        path: require("@/assets/photo1.png"),
        alt: "img",
      },
      { path: require("@/assets/photo2.png"), alt: "img" },
      { path: require("@/assets/photo3.png"), alt: "img" },
      { path: require("@/assets/photo4.png"), alt: "img" },
    ];
    return {
      images,
    };
  },
});
</script>
<style lang="scss"></style>
