class FeedbackAssignmentsController < ApplicationController
  before_action :set_feedback_assignment, only: [:show, :edit, :update, :destroy]

  # GET /feedback_assignments
  # GET /feedback_assignments.json
  def index
    @feedback_assignments = FeedbackAssignment.all
  end

  # GET /feedback_assignments/1
  # GET /feedback_assignments/1.json
  def show
  end

  # GET /feedback_assignments/new
  def new
    @feedback_assignment = FeedbackAssignment.new
  end

  # GET /feedback_assignments/1/edit
  def edit
  end

  # POST /feedback_assignments
  # POST /feedback_assignments.json
  def create
    @feedback_assignment = FeedbackAssignment.new(feedback_assignment_params)

    respond_to do |format|
      if @feedback_assignment.save
        format.html { redirect_to @feedback_assignment, notice: 'Feedback assignment was successfully created.' }
        format.json { render :show, status: :created, location: @feedback_assignment }
      else
        format.html { render :new }
        format.json { render json: @feedback_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /feedback_assignments/1
  # PATCH/PUT /feedback_assignments/1.json
  def update
    respond_to do |format|
      if @feedback_assignment.update(feedback_assignment_params)
        format.html { redirect_to @feedback_assignment, notice: 'Feedback assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @feedback_assignment }
      else
        format.html { render :edit }
        format.json { render json: @feedback_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /feedback_assignments/1
  # DELETE /feedback_assignments/1.json
  def destroy
    @feedback_assignment.destroy
    respond_to do |format|
      format.html { redirect_to feedback_assignments_url, notice: 'Feedback assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_feedback_assignment
      @feedback_assignment = FeedbackAssignment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def feedback_assignment_params
      params.require(:feedback_assignment).permit(:feedback_id, :sender_id, :receiver_id)
    end
end
