export default {
	moduleFileExtensions: ['js', 'vue'],
  transform: {
		'^.+\\.js$': 'babel-jest',
    "^.+\\.vue$": "@vue/vue3-jest",
  },
	testEnvironment: "jsdom",
	transformIgnorePatterns: [
		"node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)"
	]
};