import { Flex } from '@chakra-ui/react'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEditorContext } from '../contexts/editorContext'
import styles from './styles/global.module.css'

type Props = {}

const Markdown: FC<Props> = (): JSX.Element => {
	const { markdownText } = useEditorContext()

	return (
		<Flex flex={1} p={2}>
			<Flex
				w={'100%'}
				border={'1px solid rgba(158, 158, 158, 0.3)'}
				borderRadius={'md'}
				p={4}
			>
				<div>
					<ReactMarkdown
						className={styles.markdown}
						remarkPlugins={[remarkGfm]}
					>
						{markdownText}
					</ReactMarkdown>
				</div>
			</Flex>
		</Flex>
	)
}

export default Markdown

// Path: components/Markdown.tsx
// Created at: 14:36:08 - 21/11/2022
// Language: Typescript
// Framework: React/Next.js
