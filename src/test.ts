import parse from './index'
// @ts-ignore
test('integration', () => {
  // @ts-ignore
  expect(
    JSON.stringify(
      parse(`/**
* useFoo
*
* const val = useFoo(initialState);
*
* @param {number} initialState - The initial state of the useFoo hook
* @returns {number} state - The current value
*/`),
      null,
      2,
    ),
  ).toMatchInlineSnapshot(`
    "[
      {
        \\"tags\\": [
          {
            \\"optional\\": false,
            \\"type\\": \\"number\\",
            \\"name\\": \\"initialState\\",
            \\"description\\": \\"- The initial state of the useFoo hook\\",
            \\"tag\\": \\"param\\",
            \\"line\\": 5,
            \\"source\\": \\"@param {number} initialState - The initial state of the useFoo hook\\"
          },
          {
            \\"optional\\": false,
            \\"type\\": \\"number\\",
            \\"name\\": \\"state\\",
            \\"description\\": \\"- The current value\\",
            \\"tag\\": \\"returns\\",
            \\"line\\": 6,
            \\"source\\": \\"@returns {number} state - The current value\\"
          }
        ],
        \\"line\\": 0,
        \\"description\\": \\"useFoo\\\\n\\\\nconst val = useFoo(initialState);\\",
        \\"source\\": \\"useFoo\\\\n\\\\nconst val = useFoo(initialState);\\\\n\\\\n@param {number} initialState - The initial state of the useFoo hook\\\\n@returns {number} state - The current value\\"
      }
    ]"
  `)
})
