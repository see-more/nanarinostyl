export default function (dataset: Record<string, any>) {
    const attrs: Record<`data-${string}`, string> = {}
    for (const [k, v] of Object.entries(dataset)) {
        Reflect.set(attrs, `data-${k}`, `${v}`)
    }
    return attrs
}
