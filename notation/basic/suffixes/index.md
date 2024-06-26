<script setup>
import ColorText from '/.vitepress/theme/components/ColorText.vue';

</script>
# Суффиксы

Ну, эта статья идет ровно после префиксов... По второму кругу объяснять все не буду, лучше сразу к сути. *Ну и да, пишутся они непосредственно после названия трюка*

::: info Отличия
Если вы думали что суффиксы и префиксы как то отличаются по логике действия, то вы правы только отчасти. Какие-то тонкие границы между действиями суффиксов/постфиксов можно увидеть, но единое определение/отличие вывести нельзя.
:::

Еще прикол суффиксов в многократно накопившимся легаси, большинство этих модификаторов проще будет не использовать, а расписать полностью.

Всего их 12:

| Обозначение | Обозначение|
| - | - |
| <ColorText text="normal" color="#88e19d"/> | <ColorText text="rise" color="#88e19d"/> |
| <ColorText text="reverse" color="#88e19d"/> | <ColorText text="fall" color="#88e19d"/> |
| <ColorText text="harmonic" color="#e4e268"/> |<ColorText text="bust *" color="#88e19d"/> |
| <ColorText text="riser" color="#e4e268"/> | <ColorText text="cardioid" color="#e4e268"/> |
| <ColorText text="release" color="#88e19d"/> | <ColorText text="still *" color="#e46868"/> |
| <ColorText text="pop" color="#e4e268"/> | |

## `normal`/`rev`

Самые базовые из всех модификатором в целом. Влияют на направление и перемещение трюка. `normal` обозначает обычное выполнение, а `reverse` - обратное. Можно это понять как проигрывание трюка на видео задом наперед. Если вам хочется детальней узнать про фундаментальные принципы *направления вращения*, то бегом в книгу РПД.

## `harmonic`

Смысл просто в краткой записи линки `[ trick > trick rev ]`, тоесть `trick harmonic = [ trick > trick rev ]`, можно сказать что это каунтер на минималках. Опять легаси штука которую можно записать просто линкой, и будет понятнее.

*В теории может применяться к почти всем элементам, но используют в нейминге зачастую `ta harmonic`*

## `riser`

Один из многих модификаторов указывающих на подбрасывание мода во время выполнения. Конкретно этот обозначает подброс мода, и последующая ловля в слот в точности как в исходном трюке. Пример: [*bak riser*](https://www.youtube.com/watch?v=wUC_P7rKbCQ)

## `release`

Тоже указывает на подбрасывание мода, но тут конкретный аспект только на подбрасывание, без последующей ловли. *один только `ta release` является основой олд павера*

## `pop`

Невероятно, но эта штука тоже указывает на обороты в процессе выполнения, правда выполненым толчком одного/нескольких пальцев во время спина. конкретные примеры: `pinky bak pop spin`, `mirr pp > pinky pop`.

::: info release/aerial/riser
Путаница в основном возникает между двумя модификаторами `aerial`/`release`, особенно в случае `aerial ta` и `ta release`, так что снизу их прикреплю.

*Как вы уже и  понять нейминги в нотациях не всегда точные, как и граница по всех этих аериал/релиз/раймоглисер, я дал кое-какие определения, но по факту точной разницы между ними нет*
:::

## `rise`/`fall`

Тоже сокращения, указывающие на выполнение трюка последовательно от мизинца (`34`) до указательного пальца (`12`) и наоборот.

`rise` - от `34` до `12`
`fall` - от `12` до `34`

На примере:
```js
sonic rise = sonic 34-23 > sonic 23-12
sonic fall = sonic rev 12-23 > sonic rev 23-34
```

::: tip bakfall
Все модификаторы пишутся отдельно от названия трюка, но `bakfall` является исключением, тк был в свое время пипец каким популярным трюком, людям стало проще писать это слитно.
:::

::: danger Неточности
Если использовать эти подификаторы по определению, то они никак не должны влиять на направление, тоесть должно быть:

```js
sonic rise = sonic 34-23 > sonic 23-12
sonic fall = sonic 12-23 > sonic 23-34
```

Но почему то `trick fall` обозначает в некоторых случаях `[ trick rise ] rev`, поэтому не пишите эти райсы фоллы, а просто как линку записывайте...
:::

## `bust *`

Тоже придуманый 100 лет назад модификатор указывающий на выполнение баста после исходного трюка, `sonic bust` и `twisted sonic bust` единственные примеры... 

*просто пишите явно линки лол*

## `cardioid`

Тоже новомодная концепция, которая строиться вокруг идеи линки `[wiper > around]`. Основой для этого являлся трюк `ta cardioid`, который просто линка `wiper T1 > ta`. Впоследствии появилась туча трюков, вроде `bak cardioid`/`bust cardioid`

## `still *`

Штука, логикой напоминающая `moonwalk`, но только действует на слоты куда проще. А именно укащывает то что начальный и конечные слоты трюка - совпадают. Возникла потребность в этом модификаторе из за трюка `shadow`, который мод выполнятся из любого слота в любой слот. Считается легаси тк можно просто указать слоты:

```js
shadow still
shadow 12-12
```