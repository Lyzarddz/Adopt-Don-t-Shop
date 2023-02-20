class SummariesController < ApplicationController

    def index 
        render json: Summary.all, status: :ok
    end

    def show
        summary = Summary.find(params[:id])
        render json: summary
    end 

    def create
        pet = Summary.pets.find(params[:pet_id])
        summary = pet.summary.create!(summary_params)
        render json: record, status: :created
    end

    def update
        summary = Summary.find(params[:id])
        summary.update!(summary_params)
        render json: summary, status: :created
    end


    def destroy
        summary = current_adopter.summaries.find(params[:id])
        summary.destroy
        head :no_content
    end

    private

    def summary_params
        params.permit(:notes, :date, :pet_id)

    end

end
