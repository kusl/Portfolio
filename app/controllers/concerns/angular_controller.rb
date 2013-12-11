module AngularController
  extend ActiveSupport::Concern

  included do
    respond_to :html, :json
  end
end