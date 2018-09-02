export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action: typeというキーを持つオブジェクト
// actionが発生したときに、actionに組み込まれているtypeに応じて状態をどう変更するかのreducerを定義する
export const increment = () => ({
  type: 'INCREMENT'
})

export const decrement = () => ({
  type: 'DECREMENT'
})