import { createContext, useState, FC, ReactNode, useContext } from 'react'

const defaultContext = {
	markdownText: '',
	setMarkdownText: (text: string) => {}
}

const EditorContext = createContext(defaultContext)

type Props = {
	children: ReactNode
}

const EditorContextProvider: FC<Props> = ({ children }) => {
	const [markdownText, setMarkdownText] = useState('')

	return (
		<EditorContext.Provider value={{ markdownText, setMarkdownText }}>
			{children}
		</EditorContext.Provider>
	)
}

const useEditorContext = () => {
	const context = useContext(EditorContext)

	if (context === undefined) {
		throw new Error(
			'useEditorContext must be used within a EditorContextProvider'
		)
	}

	return context
}

export { EditorContextProvider, useEditorContext }

// Path: contexts/editorContext.tsx

//  # H1
// 	## H2
// 	### H3
// 	**bold text**
// 	*italicized text*

// 	> blockquote

// 	1. First item
// 	2. Second item
// 	3. Third item

// 	- First item
// 	- Second item
// 	- Third item

// 	---

// 	[title](https://www.example.com)

// 	![alt text](image.jpg)
