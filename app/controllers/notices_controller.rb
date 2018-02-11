class NoticesController < ApplicationController
  before_action :set_notice, only: [:show, :edit, :update, :destroy]

  def new
    @notice = Notice.new
  end

  def edit
  end

  def create
    @notice = Notice.new(notice_params)
    if verify_recaptcha(model: @notice) && @notice.save
      redirect_to root_url, notice: 'Notice was successfully created.'
    else
      render :new
    end
  end

  def update
    if @notice.update(notice_params)
      redirect_to @notice, notice: 'Notice was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @notice.destroy
    redirect_to notices_url, notice: 'Notice was successfully destroyed.'
  end

  private
    def set_notice
      @notice = Notice.find(params[:id])
    end

    def notice_params
      params.require(:notice).permit(:description, :polaroid, :tag_list)
    end
end
