---
title: Happy Valentine's Day
date: 2020-02-14
tags:
  - Regular
author: Li Jiahao
location: Guangdong
---

<template>
    <div>
        <p>Happy Valentine's Day Cindy! This is the 5th Valentine's Day since we've been together. We seldom celebrate this holiday for various reasons, yet the future is so promising and so long. If we're tough enough, we'll absolutely be staying together for <strong>{{ score }}</strong> days, till <strong>{{ dateStrEn }}</strong>.</p>
        <p>情人节快乐猪猪！这是我们在一起的第五个情人节，由于种种原因我们都没有认真过过这个节，但是没有关系，未来还很长，只要足够努力，我们还会一直在一起 <strong>{{ score }}</strong> 天，直到 <strong>{{ dateStrZh }}</strong>。</p>
        <div style="text-align: center;">
            <Game2048-BoardView v-model="score" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            score: 0
        };
    },
    methods: {
        endDate() {
            var date = new Date();
            date.setDate(date.getDate() + this.score);
            return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
        isTillDeath() {
            return this.score > 365 * 80;
        }
    },
    computed: {
        dateStrEn() {
            if (this.isTillDeath()) {
                return 'forever';
            } else {
                return this.endDate();
            }
        },
        dateStrZh() {
            if (this.isTillDeath()) {
                return '永远';
            } else {
                return this.endDate();
            }
        }
    }
};
</script>