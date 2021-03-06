Feature: View Projects
	In order to see my previous work
	As a viewer
	I want to quickly see my projects and contributions

	Scenario: List projects
		Given I have projects named VVMC, MissionBay
		When I go to the list of projects
		Then I should see "VVMC"
		And I should see "MissionBay"

	Scenario: View single project with pretty URL
		Given I have projects named VVMC, MissionBay
		When I go to the page '/projects/VVMC'
		Then I should see the project name "VVMC"
		And I should not see "MissionBay"