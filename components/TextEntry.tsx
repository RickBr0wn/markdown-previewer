import { Flex, Textarea } from '@chakra-ui/react'
import { FC } from 'react'
import { useEditorContext } from '../contexts/editorContext'

type Props = {}

const TextEntry: FC<Props> = (): JSX.Element => {
	const { setMarkdownText } = useEditorContext()

	const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		console.log(e.target.value)
		setMarkdownText(e.target.value)
	}

	return (
		<Flex flex={1} p={2}>
			<Textarea
				onChange={onInputChange}
				p={4}
				h={'full'}
				placeholder={'Enter your markdown here..'}
			/>
		</Flex>
	)
}

export default TextEntry

// Path: components/TextEntry.tsx
// Created at: 14:34:22 - 21/11/2022
// Language: Typescript
// Framework: React/Next.js
