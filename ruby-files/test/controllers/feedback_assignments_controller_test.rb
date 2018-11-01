require 'test_helper'

class FeedbackAssignmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @feedback_assignment = feedback_assignments(:one)
  end

  test "should get index" do
    get feedback_assignments_url
    assert_response :success
  end

  test "should get new" do
    get new_feedback_assignment_url
    assert_response :success
  end

  test "should create feedback_assignment" do
    assert_difference('FeedbackAssignment.count') do
      post feedback_assignments_url, params: { feedback_assignment: { feedback_id: @feedback_assignment.feedback_id, receiver_id: @feedback_assignment.receiver_id, sender_id: @feedback_assignment.sender_id } }
    end

    assert_redirected_to feedback_assignment_url(FeedbackAssignment.last)
  end

  test "should show feedback_assignment" do
    get feedback_assignment_url(@feedback_assignment)
    assert_response :success
  end

  test "should get edit" do
    get edit_feedback_assignment_url(@feedback_assignment)
    assert_response :success
  end

  test "should update feedback_assignment" do
    patch feedback_assignment_url(@feedback_assignment), params: { feedback_assignment: { feedback_id: @feedback_assignment.feedback_id, receiver_id: @feedback_assignment.receiver_id, sender_id: @feedback_assignment.sender_id } }
    assert_redirected_to feedback_assignment_url(@feedback_assignment)
  end

  test "should destroy feedback_assignment" do
    assert_difference('FeedbackAssignment.count', -1) do
      delete feedback_assignment_url(@feedback_assignment)
    end

    assert_redirected_to feedback_assignments_url
  end
end
