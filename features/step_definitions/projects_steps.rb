Given(/^I have projects named (.+)$/) do |names|
  names.split(', ').each do |name|
  	Project.create!(:name => name)
  end
end

When(/^I go to the list of projects$/) do
  visit projects_path
end

Then(/^I should see "(.*?)"$/) do |name|
  expect(page).to have_selector('li', text: name)
end

When(/^I go to the page '\/projects\/(.*?)'$/) do |name|
  visit '/projects/' + name
end

Then(/^I should not see "(.*?)"$/) do |name|
  response.should_not have_selector('tr td', text: name)
end

Then(/^I should see the project name "(.*?)"$/) do |name|
  response.should_not have_selector('strong', text: 'Name: ' + name)
end