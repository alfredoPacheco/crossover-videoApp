'use strict'

describe 'Directive: video', ->

  # load the directive's module
  beforeEach module 'videosApp'

  scope = {}

  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()

  it 'should make hidden element visible', inject ($compile) ->
    element = angular.element '<video></video>'
    element = $compile(element) scope
    expect(element.text()).toBe 'this is the video directive'
