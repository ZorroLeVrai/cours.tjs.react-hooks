import useArray from "./useArray"

export default function ArrayDemo() {
  const { array, set, push, remove, filter, update, clear } = useArray([
    1, 2, 3, 4, 5, 6,
  ])

  return (
    <div>
      <div>{array.join(", ")}</div>
      <button onClick={() => push(7)}>Ajouter 7</button>
      <button onClick={() => update(1, 9)}>Mettre le second élément à 9</button>
      <button onClick={() => remove(1)}>Supprimer le second élément</button>
      <button onClick={() => filter(n => n < 4)}>
        Garder les éléments inférieur à 4
      </button>
      <button onClick={() => set([1, 2])}>Mettre à jour le tableau avec [1,2]</button>
      <button onClick={clear}>Vider le tableau</button>
    </div>
  )
}