# Уточнение позиций пальцев

Мы научились описывать слоты - положение мода и какие конкретно пальцы/части тела его держат. Ну а че, мы проте теперь умные, любой слот можно записать. Назовем эти два слота:

<!--TODO: 13[2 in] 13[2 out]-->

Eh, ну, по нашей записи слоты полностью совпадают, но по факту отличие есть. Получается запись слота не предусматривает в себе информацию о точном положении *других* пальцев, которые не держат мод.

Поэтому умные люди придумали дополнение к записи слота. Оно обозначается квадратными скобочками (`[...]`) и дописыватся после локаторов.

::: info
На самом деле квадратные скобки (`[...]`) - признаная запись уточнения для трюков/слотов. Она используется еще во многих других случаях.
:::

Внутри нее используются следующие символы:
 - `=` (`==`) обозначающий контакт/близость пальцев (*вообще любых локаторов*)
 - `!=` (`/=`) по аналогии обозначающий максимальную удаленность/отсутствие касания

::: tip
Вот запись для примера/анализа:

```
указательный палец (1) не касается (!=) среднего (2)
[1!=2]

безымянный палец (3) касается (=) большого (T)
[3=T]
```

*(Порядок тут не имеет значения)*

Если нужно указать информацию для нескольких пальцев - эти записи разделяются точкой с запятой:

`[3=T; 1=2]`
:::

Зачастую это используется как раз для того что бы различать полностью согнутые/разогнутые пальцы, не учавствующие в удержании мода. Это будет обозначаться как контакт/удаление от ладони `[=P] / [!=P]`

Но запись уровня `[3=P;2!=P]` относительно сложно/долго читается и пишется. Поэтому для такого конкретного случая придумали отдельную, более интуитивную штуку:
 - `in` - палец максимально согнут/касается ладони (`=P`)
 - `out` - палец максимально разогнут (`!=P`)

И страшилка `[3=P; 2!=P]` превращается в понятную `[3 in; 2 out]`

Вот еще примеры, указывающие как как этот вид нотации будет работать.

<!--TODO: side sonic -->

И да, такая нотация(как и любая другая) нужна только для разьяснения определенных моментов. Не нужно спамить ею где не надо.

<!--TODO: ss as [1, 4 out; 2, 3 in]-->