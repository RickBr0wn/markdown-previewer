import type { NextPage } from 'next'
import MarkdownPreview from '../components/MarkdownPreview'

const Home: NextPage = () => {
	return (
		<main role='main'>
			<MarkdownPreview />
		</main>
	)
}

export default Home
