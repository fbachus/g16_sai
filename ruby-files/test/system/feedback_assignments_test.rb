require "application_system_test_case"

class FeedbackAssignmentsTest < ApplicationSystemTestCase
  setup do
    @feedback_assignment = feedback_assignments(:one)
  end

  test "visiting the index" do
    visit feedback_assignments_url
    assert_selector "h1", text: "Feedback Assignments"
  end

  test "creating a Feedback assignment" do
    visit feedback_assignments_url
    click_on "New Feedback Assignment"

    fill_in "Feedback", with: @feedback_assignment.feedback_id
    fill_in "Receiver", with: @feedback_assignment.receiver_id
    fill_in "Sender", with: @feedback_assignment.sender_id
    click_on "Create Feedback assignment"

    assert_text "Feedback assignment was successfully created"
    click_on "Back"
  end

  test "updating a Feedback assignment" do
    visit feedback_assignments_url
    click_on "Edit", match: :first

    fill_in "Feedback", with: @feedback_assignment.feedback_id
    fill_in "Receiver", with: @feedback_assignment.receiver_id
    fill_in "Sender", with: @feedback_assignment.sender_id
    click_on "Update Feedback assignment"

    assert_text "Feedback assignment was successfully updated"
    click_on "Back"
  end

  test "destroying a Feedback assignment" do
    visit feedback_assignments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Feedback assignment was successfully destroyed"
  end
end
