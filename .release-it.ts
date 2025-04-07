import type { Config } from 'release-it'

export default {
	git: {
		commitMessage: 'Release v${version}',
		commit: true,
		tag: true,
		push: true,
		tagName: 'v${version}'
	},
	github: {
		release: true,
		releaseName: 'v${version}',
		makeLatest: true,
		autoGenerate: true
	},
	npm: {
		publish: false
	},
	plugins: {
		'@release-it/conventional-changelog': {
			preset: {
				name: 'angular'
			},
			infile: 'CHANGELOG.md'
		},
		'@j-ulrich/release-it-regex-bumper': {
			out: [
				{
					file: '.deployment/app/deployment.yaml',
					search: 'v\\d+\\.\\d+\\.\\d+',
					replace: 'v{{versionWithoutPrerelease}}'
				}
			]
		}
	}
} satisfies Config
